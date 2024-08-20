import { createMocks } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import handler from '../send';

jest.mock(`resend`);
const EXAMPLE_ID = `chmod777-4pUd-1856-1u7b-88leta9sk5p1`;

describe(`Email API Endpoint`, () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (Resend.prototype.emails as any) = {
      send: jest.fn().mockResolvedValue({
        data: { id: EXAMPLE_ID },
        error: null,
      }),
    };
  });

  it(`should send an email and return 200 status code`, async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: `POST`,
    });

    await handler(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toEqual({ id: EXAMPLE_ID });
    expect(Resend.prototype.emails.send).toHaveBeenCalledTimes(1);
  });
});
