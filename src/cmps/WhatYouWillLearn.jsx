import React from 'react'
import { DoneSvg } from '../svgs/DoneSvg';
export  function WhatYouWillLearn() {
  return (
    <section className='list-container flex-col'>
    <h3 className='headline'>מה תלמד בקורס?</h3>
      <section className="list-warpper flex">
<ul className='group1 flex clean'>
 <li className='flex-ac'><DoneSvg/> Lorem ipsum dolor sit, amet baba sss adipisicing elit. </li>
  <li className='flex-ac'><DoneSvg/>adipisci ratione quia esse ea repellendus eos totam odio</li>
  <li className='flex-ac'><DoneSvg/>consectetur adipisicing elit. Atque koko popo</li>
  <li className='flex-ac'><DoneSvg/>Atque asperiores nesciunt quibusdam ipsam explicab!</li>
</ul>
    
<ul className='group2 flex clean'>
  <li className='flex-ac'><DoneSvg/>Shimon ipsum dolor sit, amet consectetur adipisicing elit. </li>
  <li className='flex-ac'><DoneSvg/>adipisci ratione quia esse ea repellendus bobo eos totam odio</li>
  <li className='flex-ac'><DoneSvg/>consectetur adipisicing elit. Atque</li>
  <li className='flex-ac'><DoneSvg/>Atque asperiores nesciunt quibusdam  ipsa explicabo</li>
</ul>

      </section>

    </section>
  )
}
