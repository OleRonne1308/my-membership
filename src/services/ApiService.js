// Intentional linting issues for the Code Quality Agent demo

export const getMembers = async() => {
    const response = await fetch("http://localhost:3000/members")
    const data = await response.json()
    return data
}

export async function addMember(member){
    const response = await fetch("http://localhost:3000/members", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(member)
    })
    const result = await response.json()
    return result
}

export const deleteMember = async (id) => {
    const response = await fetch("http://localhost:3000/members/" + id, {
        method: "DELETE"
    })
    return response
}
