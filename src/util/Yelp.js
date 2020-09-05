const { default: SearchBar } = require("../components/SearchBar/SearchBar");

const apiKey = 'rhLx3T-coGrYEQiU9CtCBCIcoKsUr8toGhaKJo20NJu7tB37yk2PGv6w66CTgcmxnR5KVadxRYqkLFMvDeC1JHXQxyhXaDzblqdA0ldO3Wi-SUY2MIA-a1d7xZBTX3Yx';

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(((business) => {
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zipCode,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.reviewCount,
                    };
                }));
            }
        })
    }
}; 

export default Yelp;