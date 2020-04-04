import fetch, { Response } from 'node-fetch'
import querystring from 'querystring'
import { MessageBuilder, MessageData } from './MessageBuilder'

export const BASE_URL = 'https://notify-api.line.me'

export class LineNotify {
  public readonly token: string

  public constructor (token?: string) {
    if (token) this.token = token
    else if (typeof process.env.LINE_NOTIFY_TOKEN === 'string') this.token = process.env.LINE_NOTIFY_TOKEN
    else throw new Error('LINE Notify token is missing.')
  }

  public async send (content: string | MessageBuilder | MessageData): Promise<Response> {
    const data = content instanceof MessageBuilder
      ? content
      : new MessageBuilder(content)

    const response = await fetch(BASE_URL + '/api/notify', {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${this.token}`
      },
      body: querystring.stringify({ ...data.toJSON() })
    })

    return response
  }
}
