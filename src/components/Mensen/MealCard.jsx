function MealCard() {
    return (
        <>
            <div className="meal-card flex-row">
                <div className="meal-bg remove">
                    <div className="meal-name">
                        Spaghetti Bolognese
                    </div>

                    <div className="meal-category text-uppercase">
                        Hauptspeise
                    </div>
                </div>

                <div className="meal-card-body flex-column">
                    <div className="meal-badges">
                        <div className="badge-1">
                            <div className="badge-text">
                                Zuckerfrei
                            </div>
                        </div>

                        <div className="badge-2">
                            <div className="badge-text">
                                Vegan
                            </div>
                        </div>
                    </div>

                    <div className="meal-prices flex-row">
                        <div className="prices">
                            Students € 2.50
                        </div>

                        <div className="prices">
                            Fakulty € 3.00
                        </div>

                        <div className="prices">
                            Others € 5.00
                        </div>
                    </div>
                </div>
            </div>

            <div className="meal-card flex-row">
                <div className="meal-bg remove">
                    <div className="meal-name">
                        Vanillepudding mit Schokosauce
                    </div>

                    <div className="meal-category text-uppercase">
                        Dessert
                    </div>
                </div>

                <div className="meal-card-body flex-column">
                    <div className="meal-badges">
                        <div className="badge-1">
                            <div className="badge-text">
                                Zuckerfrei
                            </div>
                        </div>

                        <div className="badge-2">
                            <div className="badge-text">
                                Ohne bla bla
                            </div>
                        </div>
                    </div>

                    <div className="meal-prices flex-row">
                        <div className="prices">
                            Students € 1.00
                        </div>

                        <div className="prices">
                            Fakulty € 1.50
                        </div>

                        <div className="prices">
                            Others € 2.50
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MealCard
