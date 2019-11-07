export const createStarter = starter => {
  console.log("createStarter", starter);
  return postData(`/v1/starters/`, { starter });
};

function postData(url = ``, data = {}) {
  console.log("postData url, data:", url, data);
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export const destroyStarter = id => {
  console.log("destroy starter: ", id);
  return deleteData(`/v1/starters/${id}`);
};

function deleteData(url = ``, data = {}) {
  return fetch(url, {
    method: "DELETE"
  });
}
