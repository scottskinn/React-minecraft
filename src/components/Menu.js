import { useStore } from "../hooks/useStore"


export const Menu = () => {
    const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld])

    return (
        <div className="menu absolute">
            <button 
                className="saveWorld"
                onClick={() => saveWorld()}>
                Save
            </button>
            <button 
                className="resetWorld"
                onClick={() => resetWorld()}>
                Reset
            </button>
        </div>
    )
}