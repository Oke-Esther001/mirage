import { createServer } from "miragejs";

export const server = () => {
  createServer({
    routes() {
      this.get("/api/users", () => ({
          users: [
            {
              id: "1",
              firstName: "Kehnieeeee",
              gender: "Female",
            },
          ],
        }))
    },
  });
};
