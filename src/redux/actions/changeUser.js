export const changeUserName = (name) => {
    return {
        type: "CHANGEUSERNAME",
        payload: name,
    };
};

export const changeUserAge = (age) => {
    return {
        type: "CHANGEUSERAGE",
        payload: age,
    };
};