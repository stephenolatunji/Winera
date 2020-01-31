import React from 'react';
import './Home.css';

const Home = () => {
    return(
        <div className='container-fluid'>
            <div className='card w-50'>
                    <div className="embed-responsive embed-responsive-4by3">
                        <iframe className='embed-responsive-item' width="340" height="200" src="https://www.youtube.com/embed/ic-tqu49UnQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    </div>
            </div>
            <section id='history' className=''>
                <div className='row'>
                    <div className='col-sm-6'>
                        <h3>Brief History of Cocktail</h3>
                        <p>The word “cocktail” was first defined in 1806 by The Balance and Columbian Repository of Hudson, New York as “a stimulating liquor composed of any kind of sugar, water and bitters, vulgarly called a bittered sling.”<br />Before the invention of bitters, cocktails were known as “slings,” which comes from the German word “schlingen,” meaning to swallow quickly.</p>
                        <p>Before the invention of bitters, cocktails were known as “slings,” which comes from the German word “schlingen,” meaning to swallow quickly.<br />A school of thought have it that the story of its origins was surrounded by mysticism and fables that the word came from New Orleans, where it was derived from the French word “coquetel,” an eggcup that was used for serving drinks. There was also a story of a drink being decorated by a cock’s tail and served in celebration to soldiers of the revolution by Betsy Flanagan. There was even a reference to drinks in Mexico being stirred with a “cola de gallo” (cock’s tail).</p>
                        <p>Today, the word “cocktail” is used to describe the collective group of mixed alcoholic drinks that we see on bar menus around the world. Most professional and informed bartenders now understand a cocktail to be something made of spirit, water, sugar and bitters</p>
                    </div>
                    <div className='col-sm-6'>
                        <h3>Health Benefit of Cocktail</h3>
                        <p>Drink to your health!</p>
                        <p>Moderate amounts of alcohol seem to be the best for your health in a number of ways.<br />The high level of antioxidants in alcoholic beverages may be beneficial for your cardiovascular system in particular. Antioxidants help fight changes to the blood vessel and plaque buildup, help the inside lining fight the effects of blood pressure and high blood sugar, and it also increases good cholesterol. <br />A moderate intake means one drink per day for women and no more than two drinks a day for men. The following amounts are considered one serving:
                            <ul>
                                <li>12 ounces of beer</li>
                                <li>8 ounces of malt liquor</li>
                                <li>5 ounces of wine</li>
                                <li>1.5 ounces of distilled spirits (80 proof, such as gin, vodka, rum or whiskey)</li>
                            </ul>
                        </p>
                        <p>However, there’s a fine line between the health benefits and negative side effects of alcohol. In fact, too much alcohol can have the exact opposite effect as the antioxidants. <br />It can oxidize your cholesterol, therefore making it more likely to cause plaque buildup in your arteries. You can also experience more of that oxidized effect in the liver and kidneys</p>
                    </div>
                </div>
            </section>
        </div>
    )
};
export default Home;
