import http from "../../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/project");
  }

  get(id) {
    return http.get(`/project/${id}`);
  }

  create(data) {
    return http.post("/project", data);
  }

  update(id, data) {
    return http.put(`/project/${id}`, data);
  }

  delete(id) {
    return http.delete(`/project/${id}`);
  }

  deleteAll() {
    return http.delete(`/project`);
  }

  findByTitle(title) {
    return http.get(`/project?title=${title}`);
  }
}

export default new TutorialDataService();
