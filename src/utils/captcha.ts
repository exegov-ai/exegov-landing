export async function getCaptchaToken() {
  return new Promise<string | null>((resolve) => {
    grecaptcha.ready(async () => {
      const captchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

      if (!captchaKey) {
        resolve(null);
        return;
      }

      const token = await grecaptcha.execute(captchaKey, {
        action: `contact`,
      });

      resolve(token);
    });
  });
}

type TCaptchaData =
  | {
      success: true;
      challange_ts: string;
      hostname: string;
      score: number;
      action: string;
    }
  | {
      success: false;
      challange_ts: string;
      hostname: string;
      score: number;
      action: string;
      'error-codes': string[];
    };

export async function verifyCaptcha(token: string | null, secretKey: string): Promise<TCaptchaData | null> {
  if (!secretKey) {
    throw new Error(`No secret key found.`);
  }

  if (!token) {
    throw new Error(`Token is missing.`);
  }

  const url = new URL(`https://www.google.com/recaptcha/api/siteverify`);

  url.searchParams.append(`secret`, secretKey);
  url.searchParams.append(`response`, token);

  const res = await fetch(url, { method: `POST` });
  const captchaData = await res.json();

  if (!res.ok) return null;

  return captchaData;
}
