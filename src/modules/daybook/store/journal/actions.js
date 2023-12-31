import journalApi from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get('/entries.json');

    if (!data) {
        commit('setEntries', []);
        return;
    }
    const entries = new Array();
    for (let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id]
        })
    }
    commit('setEntries', entries);
}

export const updateEntry = async ({ commit }, entry) => {
    const { date, picture, text } = entry;
    const dataToSave = { date, picture, text };

    await journalApi.put(`/entries/${entry.id}.json`, dataToSave);

    commit('updateEntry', { ...entry });
}

export const createEntry = async ({ commit }, entry) => {
    const { date, picture, text } = entry;
    const dataToSave = { date: new Date(date).toDateString(), picture, text };

    const { data } = await journalApi.post('/entries.json', dataToSave);
    entry = { ...entry, id: data.name };
    commit('addEntry', { ...entry });

    return data.name;
}

export const deleteEntry = async ({ commit }, id) => {
    const { data } = await journalApi.delete(`/entries/${id}.json`);
    console.log(data);
    commit('deleteEntry', id);
}