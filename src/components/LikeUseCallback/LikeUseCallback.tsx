import React, {useCallback, useMemo, useState} from 'react';

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'TS', 'HTML'])


    const memoizedAddBook = useCallback(() => {
        const newUsers = [...books, 'Angular ' + new Date().getTime()]
        setBooks(newUsers)
    }, [books])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Book addBook={memoizedAddBook}/>
        </>
    );
};


const BooksSecret = (props: {addBook: () => void}) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}
const Book = React.memo(BooksSecret)

