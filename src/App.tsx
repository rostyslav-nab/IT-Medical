import React, {useState} from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import {createBook} from "./backend/mocks/books"
import classes from './App.module.css'

export const App: React.FC = () => {
    const [books, setBooks] = useState(createBook(15))

    const uploadBooks = (): void => {
        setTimeout(() => {
            setBooks(books.concat(createBook(10)))
        }, 2000)
        // Задержка
    };

    return (
        <div>
            <InfiniteScroll
                dataLength={books.length}
                next={uploadBooks}
                hasMore={true}
                loader={<h4>Please wait...</h4>}
            >
                {books.map((item, index: number) => (
                    <div className={classes.container} key={index}>
                        <div className={classes.book}>
                            <p>Author: {item.author}</p>
                            <p>Title: {item.title}</p>
                            <p>Price: {item.price} $</p>
                        </div>
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    );

}
