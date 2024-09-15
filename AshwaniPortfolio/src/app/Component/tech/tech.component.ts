import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/Shared/technologies';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})

export class TechComponent implements OnInit {
  technologies: Technology[] = [
    {
      name: 'Angular',
      experience: 2,
      imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png'
    },
    {
      name: '.NET Core',
      experience: 2,
      imageUrl: 'https://www.ibm.com/content/dam/adobe-cms/instana/media_logo/dotnetCore.component.complex-narrative-xl.ts=1690481702068.png/content/adobe-cms/us/en/products/instana/supported-technologies/dotnet-core-monitoring/_jcr_content/root/table_of_contents/body/content_section_styled/content-section-body/complex_narrative/logoimage'
    },
    {
      name: 'C#',
      experience: 2,
      imageUrl: 'https://static-00.iconduck.com/assets.00/c-sharp-c-icon-1822x2048-wuf3ijab.png'
    },
    {
      name: 'SQL',
      experience: 2,
      imageUrl: 'https://seeklogo.com/images/A/azure-sql-database-logo-D7A32C9CD9-seeklogo.com.png'
    },
    {
      name: 'MongoDB',
      experience: 2,
      imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226029.png'
    },
    {
      name: 'Microservices',
      experience: 2,
      imageUrl: 'https://jpmorgenthal.com/wp-content/uploads/2021/01/Microservices.png'
    },
    {
      name: 'Git',
      experience: 4,
      imageUrl: 'https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
