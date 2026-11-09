import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Ayenne Mary Wage';
  location = 'Bamban, Tarlac';
  email = 'wg.ayennesoc@gmail.com';
  phone = '0956 830 8527';

  profile = 'I am an IT student specializing in Web Development, with a passion for UI/UX design and creating user-friendly websites. I enjoy exploring new technologies, improving my skills, and turning creative ideas into functional digital solutions.';

  skills = [
    'HTML & CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'UI/UX Design',
    'Figma',
    'Responsive Web Design',
    'Graphic Design'
  ];

  message = 'Every great idea starts with a little curiosity. ✦';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You've discovered ${this.clickCount} little star(s) in my universe! ✦`;
  }

}
