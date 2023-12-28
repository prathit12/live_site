<template>
  <section class="faq-section py-5" id="experience">
            <div class="container single-col-max">
                <div class="row text-center">
                    <div class="col-12">
                        <div class="about-title">
                            <h3 class="text-uppercase title-text" style="font-size: 35px;">Experience</h3>
                        </div>
                    </div>
                </div>
                <div id="exp-accordion" class="faq-accordion mx-auto">
                    <div class="card border-0 mb-4 shadow-sm">
                        <div class="card-header border-0 p-4 theme-bg-light">
                            <h4 class="card-title mb-0 exp">
                                <i class="fas fa-building mr-2"></i>
                                <a data-parent="#exp-accordion" data-toggle="collapse" class="card-toggle collapsed"
                                    href="#experience6" aria-expanded="false">
                                    <i class="fas fa-chevron-down"></i>
                                    TechnoGuide Infosoft Pvt. Ltd. (<i>Django Intern </i>)
                                </a>
                                <span>Feb 2022 - April 2022</span>
                            </h4>
                        </div>

                        <div class="card-collapse collapse" id="experience6">
                            <div class="card-body p-4 bg-white">
                                <ul>
                                  <li>Crafted a user-friendly application using the Django Framework, MySQL, and HTML technologies to build an 
API that played a key role in a company project.
                                    </li>
                                    <li>Designed a simple and intuitive Content Management System (CMS) with a Web Admin-style interface.
                                    </li>
                                    <li>
                                        This made content management a breeze for the team, boosting productivity and user satisfaction.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
  name: 'MyExperience'
}
</script>