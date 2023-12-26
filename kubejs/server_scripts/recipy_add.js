// priority: 1001

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.log("adding things")

onEvent('recipes', event => {
  console.log("adding recipes")
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
		  "item": "minecraft:blaze_rod"
		},
		"result": {
		  "fluid": "tconstruct:blazing_blood",
		  "amount": 10
		},
		"temperature": 1000,
		"time": 40,
	  })
  // event.shaped(
  //   Item.of("computercraft:computer_normal", 1), // arg 1: output
  //   [
  //     'AAA',
  //     'ABA', // arg 2: the shape (array of strings)
  //     'ACA'
  //   ],
  //   {
  //     A: 'create:andesite_alloy',
  //     B: 'minecraft:redstone',  //arg 3: the mapping object
  //     C: 'minecraft:glass'
  //   }
  // )
  event.shaped(
    Item.of("computercraft:computer_advanced", 1), // arg 1: output
    [
      'AAA',
      'ABA', // arg 2: the shape (array of strings)
      'ACA'
    ],
    {
      A: 'create:brass_ingot',
      B: 'minecraft:redstone',  //arg 3: the mapping object
      C: 'minecraft:glass'
    }
  )
  // event.shaped(
  //   Item.of("computercraft:advanced_pocket_computer", 1), // arg 1: output
  //   [
  //     'AAA',
  //     'ABA', // arg 2: the shape (array of strings)
  //     'ACA'
  //   ],
  //   {
  //     A: 'create:brass_ingot',
  //     B: 'minecraft:redstone',  //arg 3: the mapping object
  //     C: 'minecraft:glass'
  //   }
  // )
  event.shaped(
    Item.of("computercraft:monitor_advanced", 4), // arg 1: output
    [
      'AAA',
      'ABA', // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: 'create:brass_ingot',
      B: 'minecraft:glass'  //arg 3: the mapping object
    }
  )
  // event.shaped(
  //   Item.of("computercraft:monitor_normal", 1), // arg 1: output
  //   [
  //     'AAA',
  //     'ABA', // arg 2: the shape (array of strings)
  //     'AAA'
  //   ],
  //   {
  //     A: 'create:andesite_alloy',
  //     B: 'minecraft:glass',  //arg 3: the mapping object
  //   }
  // )
  event.shaped(
    Item.of("computercraft:speaker", 1), // arg 1: output
    [
      'AAA',
      'ABA', // arg 2: the shape (array of strings)
      'ACA'
    ],
    {
      A: 'create:andesite_alloy',
      B: 'minecraft:note_block',  //arg 3: the mapping object
      C: 'minecraft:redstone'
    }
  )
  event.shaped(
    Item.of("computercraft:wireless_modem_normal", 1), // arg 1: output
    [
      'AAA',
      'ABA', // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: 'create:andesite_alloy',
      B: 'minecraft:ender_pearl'  //arg 3: the mapping object
    }
  )
  event.shaped(
    Item.of("computercraft:wireless_modem_advanced", 1), // arg 1: output
    [
      'AAA',
      'ABA', // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: 'create:brass_ingot',
      B: 'minecraft:ender_pearl'  //arg 3: the mapping object
    }
  )
  event.shaped(
    Item.of("computercraft:disk_drive", 1), // arg 1: output
    [
      'AAA',
      'ACA', // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: 'create:andesite_alloy',
      B: 'minecraft:chest',  //arg 3: the mapping object
      C: 'minecraft:redstone'
    }
  )
  event.shaped(
    Item.of("computercraft:wired_modem", 1), // arg 1: output
    [
      'AAA',
      'ABA', // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: 'create:andesite_alloy',
      B: 'minecraft:redstone'  //arg 3: the mapping object
    }
  )
  event.shaped(
    Item.of("computercraft:cable", 1), // arg 1: output
    [
      ' A ',
      'ABA', // arg 2: the shape (array of strings)
      ' A '
    ],
    {
      A: 'create:andesite_alloy',
      B: 'minecraft:redstone'  //arg 3: the mapping object
    }
  )
  event.shapeless(
    Item.of("computercraft:wired_modem_full", 1), // arg 1: output
    [
      'computercraft:wired_modem'
    ]
  )
  event.shapeless(
    Item.of("computercraft:wired_modem", 1), // arg 1: output
    [
      'computercraft:wired_modem_full'
    ]
  )
  // event.shapeless(
  //   Item.of("computercraft:disk", 1), // arg 1: output
  //   [
  //     'minecraft:paper',
  //     'minecraft:redstone'  //arg 3: the mapping object
  //   ]
  // )


  event.custom({
    "type":"createaddition:liquid_burning",
    "input": {
          "fluidTag": "tconstruct:blazing_blood",
          "amount": 1000
    },
    "burnTime": 12000,
    "superheated": true
  })
  
  event.custom({
    "type":"createaddition:liquid_burning",
    "input": {
          "fluidTag": "minecraft:lava",
          "amount": 1000
    },
    "burnTime": 20000
  })


  event.recipes.createMixing('minecraft:cobbled_deepslate', [
    "#forge:cobblestone/normal",
    "#forge:cobblestone/normal",
    "#forge:gravel",
    "#forge:gravel",
    Fluid.of('minecraft:lava', 100)
  ]).heated()

  event.recipes.createCompacting('minecraft:tuff', [
    "#forge:deepslate",
    "#forge:deepslate",
    "minecraft:flint",
    Fluid.of('minecraft:lava', 100)
  ]).heated()

  event.recipes.createCompacting('minecraft:redstone', [
    "minecraft:nether_wart_block",
    "minecraft:nether_wart_block",
    Fluid.of('minecraft:water', 100)
  ]).heated()

  //add the nether rack recipe again after changing the ratio
  event.recipes.createMixing('2x minecraft:netherrack', [
    "#forge:cobblestone",
    "create:cinder_flour",
    Fluid.of('minecraft:lava', 25)
  ])
})


onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})