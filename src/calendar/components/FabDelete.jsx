import { useCalendarStore, useUiStore } from "../../hooks"

export const FabDelete = () => {

    const { startDeletingEvent, hasEventSelected } = useCalendarStore();

    const handleDelete= async() => {
        await startDeletingEvent();
    }
    
    
    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={ handleDelete }
            style={{
                display: hasEventSelected ? '':'none'
            }}
            aria-label="btn-delete"
        > 
            <i className="fas fa-trash-alt"></i>
        </button>
    )
}
