import "next-auth";

declare module "next-auth" {
  interface AdapterUser {
    name?: string | null;
    image?: string | null;
    sub?: string | null;
  }

  interface Session {
    user: AdapterUser;
    expires: string; // Use only `string` since `expires` is serialized as a string in JSON.
    error?: "RefreshTokenError";
  }

  interface JWT {
    access_token: string;
    expires_at: number;
    error?: "RefreshTokenError";
  }
}
