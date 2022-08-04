import client from './supabase-client.js';

export async function getFamiliesWithBunnies() {
  const response = await client.from('fuzzy_families').select(`
	id,
	name,
	avatar
	)`);
  return response;
}

export async function addFamily(family) {
  const response = await client.from('fuzzy_families').insert(family).single();
  return response;
}

export async function removeFamily(id) {
  const response = await client
    .from('fuzzy_families')
    .delete()
    .eq('id', id)
    .single();
  return response;
}

export async function updateFamily(id, familyUpdate) {
  return await client
    .from('fuzzy_families')
    .update(familyUpdate)
    .eq('id', id)
    .single();
}
