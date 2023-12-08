import { useEffect, useState } from 'react';
import * as bookService from '../services/bookService';
import RecentBook from './RecentBook';

export default function Home() {
    const [recentBooks, setRecentBooks] = useState([]);

    useEffect(() => {
        bookService.getRecent()
            .then(result => {
                setRecentBooks(result);
            }, []);
    });

    return (
        <>
            <div id="templatemo_content">
    	
                <div id="templatemo_content_left">
                    <div className="templatemo_content_left_section">
                        <h1>Categories</h1>
                        <ul>
                            <li><a href="subpage.html">Donec accumsan urna</a></li>
                            <li><a href="subpage.html">Proin vulputate justo</a></li>
                            <li><a href="#">In sed risus ac feli</a></li>
                            <li><a href="#">Aliquam tristique dolor</a></li>
                            <li><a href="#">Maece nas metus</a></li>
                            <li><a href="#">Sed pellentesque placerat</a></li>
                            <li><a href="#">Suspen disse</a></li>
                            <li><a href="#">Maece nas metus</a></li>
                            <li><a href="#">In sed risus ac feli</a></li>
                        </ul>
                    </div>
                    <div className="templatemo_content_left_section">
                        <h1>Bestsellers</h1>
                        <ul>
                            <li><a href="#">Vestibulum ullamcorper</a></li>
                            <li><a href="#">Maece nas metus</a></li>
                            <li><a href="#">In sed risus ac feli</a></li>
                            <li><a href="#">Praesent mattis varius</a></li>
                            <li><a href="#">Maece nas metus</a></li>
                            <li><a href="#">In sed risus ac feli</a></li>
                            <li><a href="#">Flash Templates</a></li>
                            <li><a href="#">CSS Templates</a></li>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="http://www.photovaco.com" target="_parent">Free Photos</a></li>
                        </ul>
                    </div>
                    
                    <div className="templatemo_content_left_section">                
                        <a href="http://validator.w3.org/check?uri=referer"><img style={{border:0, width:88 + 'px',height:31 + 'px'}} src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Transitional" width="88" height="31" vspace="8" border="0" />
                        </a>
                        <a href="http://jigsaw.w3.org/css-validator/check/referer">
                            <img style={{border:0, width:88 + 'px', height:31 + 'px'}}  src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!" vspace="8" border="0" />
                        </a>
                    </div>
                </div>
                
                <div id="templatemo_content_right">
                    {recentBooks.map(book => <RecentBook {...book} />)}

                    {!recentBooks.length && <h1>No books yet! Come back later!</h1>}
                    
                    <a href="subpage.html"><img src="images/templatemo_ads.jpg" alt="ads" /></a>
                </div>
            
                <div className="cleaner_with_height">&nbsp;</div>
            </div>        
        </>
    );
}