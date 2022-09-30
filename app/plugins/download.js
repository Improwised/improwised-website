export default function ({ $axios }, inject) {
  inject("download", (ids) => {
    const fs = require("fs");
    return new Promise((resolve, reject) => {
      try {
        ids.forEach(async (id) => {
          await $axios
            .get(`https://data.improwised.com/assets/${id}`, {
              responseType: "arraybuffer",
              responseEncoding: "binary",
            })
            .then(async (res) => {
              await fs.writeFile(`static/${id}.pdf`, res.data, (err) => {
                if (err) console.log(err); // eslint-disable-line no-console
                else {
                  console.log("File written successfully\n"); // eslint-disable-line no-console
                }
              });
            })
            .catch((error) => {
              console.error(error); // eslint-disable-line no-console
            });
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  });
}
