
const initialState = {
    todo:[],
    inprogress:[],
    completed:[]
}

const assignId = (stories) => {
    const maxId = stories.reduce((newId,oldStory)=>Math.max(oldStory.id,newId),0)
    return maxId+1;
}
export default function Story(state = initialState, action)
{
    switch(action.type)
    {
        case "add-story":
            return {
                    ...state,
                    todo : [
                        ...state.todo,
                        {
                            id : assignId(state.todo),
                            title : action.payload,
                            status : "todo"
                        }
                    ]
                }
        case "update-story":
            
            let payload = action.payload
            payload.id = Number(payload.id)
            let allStories = [...state.todo, ...state.inprogress, ...state.completed]
            let story = allStories.filter((story)=>story.id === payload.id)[0]
            story.status = payload.updateTo
            let tempState = {
                ...state,
                todo : state.todo.filter((s)=>s.id !== payload.id),
                inprogress : state.inprogress.filter((s)=>s.id !== payload.id),
                completed : state.completed.filter((s)=>s.id !== payload.id),
            }
            story.status === "todo" ? tempState.todo.push(story) : story.status === "inprogress" ? tempState.inprogress.push(story) : tempState.completed.push(story);

            return tempState
        case "delete-story":
            const id = Number(action.payload.id)
            return {
                ...state,
                todo : state.todo.filter((s)=>s.id !== id),
                inprogress : state.inprogress.filter((s)=>s.id !== id),
                completed : state.completed.filter((s)=>s.id !== id),
            }
        default:
            return state;
    }
}