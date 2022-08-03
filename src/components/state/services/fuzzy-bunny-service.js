import client from './supabase-client.js';

export async function getFamiliesWithBunnies() {
  const response = await client.from('fuzzy_families').select(`
	id,
	name,
	bunnies: bunnies(
			id,
			familyId: familyId,
			name
	)`);
  return response;
}

export async function addFamily(family) {
  const response = await client.from('fuzzy_families').insert(family).single();
  return response;
}
