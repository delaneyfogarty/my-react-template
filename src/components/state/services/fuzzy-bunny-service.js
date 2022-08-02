import client from './supabase-client.js';

export async function getFamiliesWithBunnies() {
  const response = await client.from('fuzzy_families').select(`
	id,
	name,
	avatar,
	bunnies:bunnies(
		id,
		familyId: family_id,
		name
	)`);
  return response;
}

export async function addFamily(family) {
  const response = await client.from('fuzzy_families').insert(family).single();
  return response;
}
