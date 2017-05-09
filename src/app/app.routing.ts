import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RoomNewComponent } from './room-new/room-new.component';
import { RoomComponent } from './room/room.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'room-new',
    component: RoomNewComponent
  },
  {
    path: 'room/:roomId',
    component: RoomComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
