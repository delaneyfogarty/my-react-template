import client from './supabase-client.js';

export async function getFamiliesWithBunnies() {
  const response = await client.from('fuzzy_families').select(`
	id,
	name,
	avatar`);
  console.log('response', response);
  return response;
}
