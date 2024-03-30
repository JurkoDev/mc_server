//priority: 1000

const disabled_item_message =
    "toto je teraz docasne vypnute";

const disabled_item_tooltip = 'toto je teraz docasne vypnute';

const jei = {
    base: {
        items: { hidden: [], disabled: [] },
        fluids: { hidden: [] },
        gases: { hidden: [] },
        categories: { hidden: [] },
        recipes: { hidden: [] }
    },
};

// Base
jei.base.items.disabled = [
    /theoneprobe/,
    // /computercraft:/,
    // /ae2:/,
];
jei.base.items.hidden = [];
jei.base.fluids.hidden = [];
jei.base.recipes.hidden = [];
jei.base.gases.hidden = [];
