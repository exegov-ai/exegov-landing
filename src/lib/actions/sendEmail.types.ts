export type TSendEmailStatus = 'SUCCESS' | 'FAILED';
export const SendEmailStatuses = {
  success: `SUCCESS`,
  failed: `FAILED`,
} as const;

export type TSendEmailState = {
  status?: TSendEmailStatus;
  message: string;
};

export type TSendEmailResponse = {
  status: TSendEmailStatus;
  message: string;
};
