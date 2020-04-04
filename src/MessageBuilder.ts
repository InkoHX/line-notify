export interface MessageData {
  message: string,
  imageThumbnail?: string,
  imageFullsize?: string,
  imageFile?: unknown,
  stickerPackageId?: number,
  stickerId?: number,
  notificationDisabled?: boolean
}

export class MessageBuilder {
  private data: MessageData

  public constructor (data: MessageData | string) {
    if (typeof data === 'string') {
      this.data = {
        message: data
      }
    } else this.data = data
  }

  public setMessage (message: string): this {
    this.data.message = message

    return this
  }

  public setThumbnail (url: string, fullSize = false): this {
    if (fullSize) this.data.imageFullsize = url
    else this.data.imageThumbnail = url

    return this
  }

  public setNotification (notice: boolean): this {
    this.data.notificationDisabled = notice

    return this
  }

  public setSticker (packageId: number, stickerId: number): this {
    this.data.stickerPackageId = packageId
    this.data.stickerId = stickerId

    return this
  }

  public toJSON (): object {
    return {
      ...this.data
    }
  }
}
