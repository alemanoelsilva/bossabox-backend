'use strict';

const headers = {
  'Content-Type': 'application/json'
};

/**
 * all users -> https://api.github.com/users
 * specific user -> https://api.github.com/users/alemanoelsilva
 * all repos by one user -> https://api.github.com/users/alemanoelsilva/repos
 *
 */
const service = (axios, endpoint) => ({
  getUsers: async ({ since }) =>
    axios.get(`${endpoint}?since=${since}`, headers),

  getUser: async (username) =>
    axios.get(`${endpoint}/${username}`, headers),

  getRepositoriesByUser: async (username, { page = 1, perPage = 10 }) =>
    axios.get(`${endpoint}/${username}/repos?page=${page}&per_page=${perPage}`, headers),
});

module.exports = service;
