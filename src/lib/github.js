import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

class GitHubAPI {
  constructor() {
    this.token = null;
  }

  setToken(token) {
    this.token = token;
  }

  get headers() {
    return {
      Authorization: `token ${this.token}`,
      Accept: 'application/vnd.github.v3+json',
    };
  }

  async getUser() {
    const response = await axios.get(`${GITHUB_API_URL}/user`, {
      headers: this.headers,
    });
    return response.data;
  }

  async getRepositoriesWithTopic(topic) {
    const response = await axios.get(
      `${GITHUB_API_URL}/search/repositories?q=topic:${topic}`,
      { headers: this.headers }
    );
    return response.data.items;
  }

  async getRepositoryIssues(owner, repo) {
    const response = await axios.get(
      `${GITHUB_API_URL}/repos/${owner}/${repo}/issues`,
      { headers: this.headers }
    );
    return response.data;
  }

  async getBountyIssues() {
    const repos = await this.getRepositoriesWithTopic('bounty-assigned');
    const issues = await Promise.all(
      repos.map(async (repo) => {
        const repoIssues = await this.getRepositoryIssues(
          repo.owner.login,
          repo.name
        );
        return repoIssues.filter((issue) =>
          issue.body?.includes('/bounty-$')
        );
      })
    );
    return issues.flat();
  }

  async getUserRepositories() {
    const response = await axios.get(`${GITHUB_API_URL}/user/repos`, {
      headers: this.headers,
    });
    return response.data;
  }
}

export const githubAPI = new GitHubAPI();