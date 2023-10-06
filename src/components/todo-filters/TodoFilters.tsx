import React from 'react'

interface Props {
    total: number;
    activeFilter: boolean;
    showAllTodos: boolean;
    showActiveTodos: boolean;
    showCompletedTodos: boolean;
    handleClearComplete: () => void;
}

export const TodoFilters = ({
    total, 
    activeFilter, 
    showAllTodos, 
    showActiveTodos, 
    showCompletedTodos, 
    handleClearComplete
}: Props ) => {
    return (
/*         <FiltersContainer>
            <ItemsLeft total={total} />
            <FilterButtonContainer>
                <FilterButton action={() => showAllTodos()} active={activeFilter} filter='All' />
                <FilterButton action={() => showActiveTodos()} active={activeFilter} filter='Active' />
                <FilterButton action={() => showCompletedTodos()} active={activeFilter} filter='Completed' />
            </FilterButtonContainer>

            <button onClick={() => handleClearComplete()} className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
                Clear Completed
            </button>
        </FiltersContainer> */
        <>
        </>
    )
}