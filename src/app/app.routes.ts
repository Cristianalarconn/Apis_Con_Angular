import { Routes } from '@angular/router';
import { RickmortyList } from './Rickmorty/rickmorty-list/rickmorty-list';
import { RickmortyDetail } from './Rickmorty/rickmorty-detail/rickmorty-detail';
import { DragonList } from './dragonball/dragon-list/dragon-list';
import { DragonDetail } from './dragonball/dragon-detail/dragon-detail';
import { SimpsonList } from './simpson/simpson-list/simpson-list';
import { SimpsonDetail } from './simpson/simpson-detail/simpson-detail';

export const routes: Routes = [

  
  { path: '', component: SimpsonList },
  { path: 'rickmorty', component: RickmortyList },
  { path: 'rickmorty/:id', component: RickmortyDetail },
  { path: 'simpsons', component: SimpsonList },
  { path: 'simpsons/:id', component: SimpsonDetail },
  { path: 'dragonball', component: DragonList },
  { path: 'dragonball/:id', component: DragonDetail },
  { path: '**', redirectTo: '' }
];

