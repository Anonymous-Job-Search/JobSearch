export class RequestError extends Error {
  constructor(
    public readonly status: number,
    public readonly statusText: string,
  ) {
    super(statusText);
  }
}
