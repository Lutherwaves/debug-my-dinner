import * as React from 'react';
import { useTranslation } from '../utils/useTranslation';

interface TranslatedRecipeProps {
    recipeKey: string;
    className?: string;
}

export default function TranslatedRecipe({ recipeKey, className }: TranslatedRecipeProps) {
    const { t, locale } = useTranslation('recipes');
    
    const getRecipeData = () => {
        try {
            const data = t(recipeKey, { returnObjects: true });
            return typeof data === 'object' && data !== null ? data : null;
        } catch (error) {
            console.warn(`Translation not found for recipe key: ${recipeKey}`);
            return null;
        }
    };
    
    const recipeData = getRecipeData() as any;
    
    if (!recipeData) {
        return null;
    }
    
    return (
        <div className={className}>
            {recipeData.title && (
                <h1 className="text-3xl font-bold mb-4">{recipeData.title}</h1>
            )}
            
            {recipeData.excerpt && (
                <p className="text-lg text-gray-600 mb-6">{recipeData.excerpt}</p>
            )}
            
            {recipeData.section1 && (
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">{recipeData.section1.title}</h2>
                    <p className="text-gray-700">{recipeData.section1.content}</p>
                </section>
            )}
            
            {recipeData.section2 && (
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">{recipeData.section2.title}</h2>
                    <div className="space-y-2 text-gray-700">
                        {recipeData.section2.prepTime && <p>{recipeData.section2.prepTime}</p>}
                        {recipeData.section2.cookingTime && <p>{recipeData.section2.cookingTime}</p>}
                        {recipeData.section2.complexity && <p>{recipeData.section2.complexity}</p>}
                    </div>
                </section>
            )}
            
            {recipeData.ingredients && (
                <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">{recipeData.ingredients.title}</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {recipeData.ingredients.items?.map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </section>
            )}
            
            {recipeData.preparation && (
                <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">{recipeData.preparation.title}</h3>
                    
                    {recipeData.preparation.calamari && (
                        <div className="mb-6">
                            <h4 className="text-lg font-medium mb-3">{recipeData.preparation.calamari.title}</h4>
                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                {recipeData.preparation.calamari.steps?.map((step: string, index: number) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ol>
                        </div>
                    )}
                    
                    {recipeData.preparation.chips && (
                        <div className="mb-6">
                            <h4 className="text-lg font-medium mb-3">{recipeData.preparation.chips.title}</h4>
                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                {recipeData.preparation.chips.steps?.map((step: string, index: number) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ol>
                        </div>
                    )}
                </section>
            )}
            
            {recipeData.cooking && (
                <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">{recipeData.cooking.title}</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        {recipeData.cooking.steps?.map((step: string, index: number) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </section>
            )}
            
            {recipeData.content && (
                <section className="mb-8">
                    <p className="text-gray-700">{recipeData.content}</p>
                </section>
            )}
        </div>
    );
}