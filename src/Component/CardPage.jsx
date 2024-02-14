import React, { useEffect, useState } from 'react';
import supabase from '../config/supabase';
import './CardPage.css'; // Assuming you have a separate CSS file for styling

function CardPage() {

    const [cards,setCards] = useState([])
    useEffect(() => {
        const fetchPublications = async () => {
          try {
            // Fetch data from the 'publication' table
            const { data, error } = await supabase.from('publication').select('*');
        
            if (error) {
              throw error;
            }
            console.log(data[0])
            setCards(data)
            
            // You can further process the data here
        
          } catch (error) {
            console.error('Error fetching publications:', error.message);
          }
        }
    
        // Call the fetchPublications function to execute the query
        fetchPublications();
      }, []);

    return (
        <div className="cardPage">
            {cards.map(card => (
                <div key={card.id} className="card">
                    <img src={card.imageUrl} alt={card.name} className="cardImage" />
                    <div className="cardContent">
                        <h3 className="cardName">{card.publication_name}</h3>
                        <a href={`https://${card.domain_name}`} className="cardLink" target="_blank" rel="noopener noreferrer">Visit Website</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardPage;
