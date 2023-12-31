import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import Log from '$lib/utils/logger';

export const actions: Actions = {
  login: async ({ request }) => {
    const data = await request.formData();
    Log.serverInfo("/login", data);

    return { success: 'Logged successfully' };
  },
  register: async ({ request }) => {
    const data = await request.formData();
    const username = data.get('username');
    const email = data.get('email');
    const password = data.get('password');
    Log.serverInfo("/register", data);

    if (!username)
      return fail(400, {
        isLogging: false,
        username,email,
        error: "missing username"
      });
    if (!email)
      return fail(400, {
        isLogging: false,
        username,email,
        error: "missing email"
      });
    if (!password)
      return fail(400, {
        isLogging: false,
        username,email,
        error: "missing password"
      });

    return { success: 'Registered successfully' };
  },
} satisfies Actions;
