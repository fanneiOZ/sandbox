export interface JwtPayloadInterface {
  user: { id: number; email: string; password?: string };
}
