import axios from "axios";

export const get = ({page}) => {
  return axios({
    method: "get",
    baseURL: "http://localhost:8080/Foods",
    params: {
      _page: page
     
    }
  });
};

export const get2 = ({page}) => {
    return axios({
      method: "get",
      baseURL: "http://localhost:8080/Exersize",
      params: {
        _page: page
        
      }
    });
  };

export const Post = (data) => {
  return axios({
    method: "POST",
    baseURL: "http://localhost:8080/Foods",
    data: { name:data.name,
        Protein:data.Protein,
        Carbs:data.Carbs,
        Fat:data.Fat }
  });
};

export const Post2 = (data) => {
    return axios({
      method: "POST",
      baseURL: "http://localhost:8080/Exersize",
      data: { name:data.name,
        Burned:data.Burned }
    });
  };



export const Delete = (id) => {
  return axios({
    method: "delete",
    baseURL: "http://localhost:8080/Foods",
    url: `/${id}`
  });
};

export const Patch = ({ id, status }) => {
  return axios({
    method: "patch",
    baseURL: "http://localhost:3000/todos",
    url: `/${id}`,
    data: { status: !status }
  });
};
