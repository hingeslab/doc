/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'Hedgeplus',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

const path = require('path');
const customCss = path.resolve(__dirname, 'static/css/custom.css');

module.exports = {
  docs: [
    {
      type: 'category',
      label: '**INTRODUCTION**',
      items: [
        'Introduction/Overview',
        'Introduction/Challenges',
        'Introduction/Solution',
      ],
    },
    {
      type: 'category',
      label: '**FEATURES**',
      items: [
        'Features/Autonomous',
        'Features/AI-Powered-Trading-Signals',
        'Features/Crypto-Assets-Investment-Fund',
        'Features/Inner-Circle-Altcoins-Trading',
        'Features/MetaVerse-NFT-Game',
        'Features/Peer-to-Peer-OTC-Exchange',
        'Features/Zero-percent-interest-loans',
      ],  
    },
    {
      type: 'category',
      label: '**HINGES TOKEN**',
      items: [
        'Hinges-Token/Token-Utility',
        'Hinges-Token/Token-Economics',
        'Hinges-Token/Vesting-Schedule',
        'Hinges-Token/Roadmap',
      ],  
    },
    {
      type: 'category',
      label: '**USER GUIDES**',
      items: [
        'User-Guides/Staking',
        'User-Guides/Provide-Liquidity',
      ],  
    },
    {
      type: 'category',
      label: '**RESOURCES**',
      items: [
        'Resources/Deployed-Contract',
        'Resources/Roadmap',
        'Resources/Code-Contributors',
        'Resources/Referral-Program',
        'Resources/FAQ',
        'Resources/Brand-Assets',
        'Resources/Blog',
      ],  
    },
    {
      type: 'category',
      label: '**SECURITY**',
      items: [
        'Security/Audit',
        'Security/Bug-Bounty-Program',
      ],  
    },
    {
      type: 'category',
      label: '**TEAM**',
      items: [
        'Team/About-Us',
        'Team/Collaborate-with-US',
      ],
      collapsed: false,  
    },
    {
      type: 'category',
      label: '**OTHER**',
      items: [
        'Fractional-Co-Owned-Real-Estate/Fractional-Co-Owned-Real-Estate',
        'Important-Notice/Important-Notice',
        'Hinges-Vesting/Hinges-Vesting',
      ],
    },
  ],
};
// Set all sidebars to not be collapsed
for (const sidebarName in sidebars) {
  sidebars[sidebarName].collapsed = false;
}

module.exports = {
  // other properties
  css: [customCss]
};


