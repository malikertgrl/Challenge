export const ApiUtils = {
    checkStatus: function (response) {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }
};