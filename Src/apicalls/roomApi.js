import { rooms } from "../server/fakedata";
import { ResponseChk, ErrorChk } from "./chkApi";
let url = process.env.REACT_APP_API_URL + "/rooms/";

export function getRooms() {
  return fetch(url).then(ResponseChk).catch(ErrorChk);
}

export function saveRoom(room) {
  return fetch(url + (room.id || ""), {
    method: room.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...room,
      charge: parseInt(room.charge),
      availability:parseInt(room.availability)
    }),
  })
    .then(ResponseChk)
    .catch(ErrorChk);
}

export function getRoombySlug(slug) {
  return fetch(url + "?slug=" + slug)
    .then((response) => {
      if (!response.ok)
        throw new Error("Movie by slug cannot be retrieved ..error");
      return response.json().then((rooms) => {
        if (rooms.length !== 1)
          throw new Error("Cannot find the movie.." + slug);
        return rooms[0];
      });
    })
    .catch(ErrorChk);
}

export function deleteRoom(id) {
  return fetch(url + id, {
    method: "DELETE",
  })
    .then(ResponseChk)
    .catch(ErrorChk);
}
