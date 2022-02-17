
import { ApiUtils } from "./apiUtils"
const baseUrl = "https://5fc9346b2af77700165ae514.mockapi.io/simpsons"

export default {
    allCharacters: function () {
        return fetch(
            baseUrl
        )
            .then(ApiUtils.checkStatus)
            .then(response => response.json())
            .catch(e => e);
    },
    characterDetails: function (characterId) {
        return fetch(
            baseUrl + "/" +
            characterId
        )
            .then(ApiUtils.checkStatus)
            .then(response => response.json())
            .catch(e => e);
    },

}