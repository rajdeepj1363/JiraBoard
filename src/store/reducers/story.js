
const initialState = {
    todo:[],
    inprogress:[],
    completed:[]
}

const assignId = (stories) => {
    const maxId = stories.reduce((newId,oldStory)=>Math.max(oldStory.id,newId),-1)
    return maxId+1;
}
export default function Story(state = initialState, action)
{
    const newPayload = {
        id : assignId(state.todo),
        title : action.payload,
        status : "OPEN"
    }

    switch(action.type)
    {
        case "add-story":
            return {
                    ...state,
                    todo : [
                        ...state.todo,
                        newPayload
                    ]
                }
        default:
            return state;
    }
}