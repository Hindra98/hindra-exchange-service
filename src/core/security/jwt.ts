import { toInt } from "../text";

export class Jwt {
  private static decode(token: string) {
    return JSON.stringify(
      decodeURIComponent(
        atob(token?.split(".")[1].replace("-", "+").replace("_", "/") || "")
          ?.split("")
          .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
          .join("")
      )
    );
  }

  private static findClaimValue = (
    decodedToken: string,
    key: Claims
  ): string => {
    let claim = "";

    decodedToken
      .split(",")
      .filter((item) => item.toLocaleLowerCase().includes(`${key}`))
      .forEach((value) => {
        const element = value.split(":");
        const claimValue = element[0].slice(0, -1);

        if (claimValue.toLocaleLowerCase() === key.toLocaleLowerCase())
          claim = element[1].slice(1, element[1].length - 1);
      });
    return claim;
  };

  public static getClaim = (token: string, key: Claims): string => {
    const decodedToken: string = JSON.parse(this.decode(token));
    return this.findClaimValue(decodedToken, key);
  };

  public static getClaims = (
    token: string,
    keys: Claims[]
  ): Map<Claims, string> => {
    const claims: Map<Claims, string> = new Map<Claims, string>();
    const decodedToken: string = JSON.parse(this.decode(token));

    for (let i = 0; i < keys.length; i++) {
      claims.set(keys[i], this.findClaimValue(decodedToken, keys[i]));
    }
    return claims;
  };

  public static decodeToken(token: string) {
    return this.decode(token);
  }

  public static isAccessTokenExpired(token: string): boolean {
    const decodedToken: string = JSON.parse(this.decode(token));
    const tokenExpires: string = this.findClaimValue(decodedToken, "exp");
    let isExpired = false;

    if (tokenExpires) {
      const expires = toInt(tokenExpires);
      if (expires * 1000 < Date.now()) isExpired = true;

      return isExpired;
    }
return false; // A supprimer
    // throw new Error("Le token a été compromis");
  }
}
