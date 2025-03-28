/// <reference types="cypress" />

describe('Complex Test Case', () => {
    beforeEach(() => {
        cy.visit('https://staging-sally.kbfinansia.com/auth/login')

        cy.get('#username').type('dhandyjoenathan')
        cy.get('#password').type('201017Dj*#*#')
        cy.get('.kt-login__actions > .kt-form').click()
    })

    context('Manajemen Prospek', () => {
        it('data not found', () => {
            cy.get('.kt-menu-id_90 > .kt-menu__toggle').click()
            cy.get('.kt-menu-id_94 > .kt-menu__link').click()
            cy.get('.kt-portlet__head-title')
                .should('be.visible')
            // .should('have.text', 'Manajemen Prospek')

            cy.get('#period').click()

            function checkBulan() {
                cy.get('.left > .calendar-table > .table-condensed > thead > :nth-child(1) > .month')
                    .invoke('text')
                    .then((value) => {
                        if (value === 'Feb 2025') {
                            cy.get('.left > .calendar-table > .table-condensed > tbody > :nth-child(1) > [data-title="r0c6"]').dblclick()
                            cy.get('.applyBtn').click()
                        } else {
                            cy.get('.prev').click()

                            checkBulan();
                        }
                    })
            }

            checkBulan();

            cy.get('#filter').click()
            cy.get('.dt-empty')
                .should('be.visible')
                .should('have.text', 'No data available in table')
        })

        it('valid', () => {
            cy.get('.kt-menu-id_90 > .kt-menu__toggle').click()
            cy.get('.kt-menu-id_94 > .kt-menu__link').click()
            cy.get('.kt-portlet__head-title')
                .should('be.visible')
            // .should('have.text', 'Manajemen Prospek')

            cy.get('#period').click()

            function checkBulan() {
                cy.get('.left > .calendar-table > .table-condensed > thead > :nth-child(1) > .month')
                    .invoke('text')
                    .then((value) => {
                        if (value === 'Feb 2025') {
                            cy.get('.left > .calendar-table > .table-condensed > tbody > :nth-child(1) > [data-title="r0c6"]').click()
                            cy.get('.left > .calendar-table > .table-condensed > tbody > :nth-child(5) > [data-title="r4c5"]').click()
                            cy.get('.applyBtn').click()
                        } else {
                            cy.get('.prev').click()

                            checkBulan();
                        }
                    })
            }

            checkBulan();

            cy.get('#filter').click()

            cy.get('#table-data-table_wrapper').should('be.visible')
            cy.get('.dt-scroll-headInner > .table').should('be.visible')
            cy.get('tbody tr').should('not.be.empty')


            cy.get(':nth-child(1) > .btn-option > .justify-content-start > .btn').click()

            cy.get('.kt-subheader__title').should('be.visible').and('have.text', 'Data Prospek')
            cy.get('.kt-subheader__desc').should('be.visible').and('have.text', 'Detail')
            cy.get('.nav li').should('have.length', 3)

            // Data Dealer
            cy.get('#data-dealer > .kt-portlet__head > .kt-portlet__head-label > .kt-portlet__head-title')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('Data Dealer')
                })
            cy.get('#data-dealer > .kt-portlet__body > :nth-child(1) > :nth-child(3) > .row > :nth-child(2) > .col-11')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('VISIT FINISHED')
                })
            cy.get(':nth-child(5) > .row > :nth-child(4) > .col-11')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('DEALER PROSPEK')
                })
            cy.get(':nth-child(6) > :nth-child(2) > :nth-child(2) > .col-11')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('081255807890')
                })

            // Data Stock Financing
            cy.get(':nth-child(2) > .nav-link').click()
            cy.get('#data-stock-financing > .kt-portlet__head > .kt-portlet__head-label > .kt-portlet__head-title')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('Data Stock Financing')
                })
            cy.get('#data-stock-financing > .kt-portlet__body > :nth-child(1) > :nth-child(2) > .row > :nth-child(1) > .col-11')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('Jumlah Stock Unit Saat Kunjungan')
                })
            cy.get('#data-stock-financing > .kt-portlet__body > :nth-child(1) > :nth-child(3) > .row > :nth-child(1) > .col-11')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('Stock Unit Terjual Bulan Ini')
                })
            cy.get(':nth-child(2) > .row > :nth-child(3) > .col-11')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('Restock Bulan Ini')
                })
            cy.get(':nth-child(3) > .row > :nth-child(3) > .col-11')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('Memiliki Pembiayaan Dari Multi Finance Lain')
                })

            cy.get('tbody tr').should('not.be.empty')

            // Dokumen Pendukung
            cy.get(':nth-child(3) > .nav-link').click()
            cy.get('#data-document > .kt-portlet__head > .kt-portlet__head-label > .kt-portlet__head-title')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('Data Dokumen Pendukung')
                })
            cy.get('#data-document > .kt-portlet__body > :nth-child(1) > .col-12 > b')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('Foto Kunjungan')
                })
            cy.get(':nth-child(2) > .col-12 > b')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('Foto Tambahan')
                })

            // cy.get(':nth-child(2) > .card > #photo_visit > .card-img-top').click()
            // cy.get('#modalImageAddress > .modal-dialog > .modal-content').should('be.visible')
            // cy.get('#modal-title-v2')
            //     .invoke('text')
            //     .should((data) => {
            //         expect(data.trim()).to.eq('Foto Dealer')
            //     })
            // cy.get('#modalImageAddress > .modal-dialog > .modal-content').should('be.visible')
            // cy.get('#visit-img').should('be.visible')
            // cy.get('.ml-2').should('be.visible')
            // cy.get('#modalImageAddress').click(50, 50);
            // cy.wait(3000); // Waits for 3 seconds
        })
    })

    context('Master Kunjungan Dealer', () => {
        it('Edit & Detail', () => {
            // Main Page
            cy.get('.kt-menu-id_90 > .kt-menu__toggle').click()
            cy.get('.kt-menu-id_97 > .kt-menu__link').click()

            cy.get('.kt-portlet__head-title')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('Master Kunjungan Dealer')
                })

            cy.get('.dt-scroll-body tbody tr').should('have.length', 2)

            // Edit 
            cy.get(':nth-child(1) > .btn-option > .justify-content-start > .btn-warning').click()

            cy.get('.kt-subheader__title')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('MO')
                })
            cy.get('.kt-subheader__desc')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('Edit')
                })

            cy.get(':nth-child(1) > .kt-portlet__head > .kt-portlet__head-label > .kt-portlet__head-title')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('Penalti')
                })
            cy.get(':nth-child(2) > .kt-portlet__head > .kt-portlet__head-label > .kt-portlet__head-title')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('Target Aktivitas Kunjungan / Bulan')
                })

            cy.get('#input-1').clear().type(50)
            cy.get('#input-2').clear().type(50)
            cy.get('#input-3').clear().type(50)
            cy.get('#input-allBranch').clear().type(50)

            cy.get('#btn-simpan').click()

            cy.get('.swal2-popup').should('be.visible')
            cy.get('.swal2-confirm').click()

            cy.get('.swal2-confirm').should('be.visible')
            cy.get('.swal2-confirm').click()


            // Detail
            cy.get(':nth-child(1) > .btn-option > .justify-content-start > .btn-primary').click()
            cy.get('.kt-subheader__title')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('MO')
                })

            cy.get('.kt-subheader__desc')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('Detail')
                })

            cy.get('#box-penalty').should('be.visible')
            cy.get('#box-target').should('be.visible')

            cy.get('#box-penalty > .table-responsive > .table > tbody > :nth-child(1) > :nth-child(2)')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('50%')
                })

            cy.get('#box-penalty > .table-responsive > .table > tbody > :nth-child(2) > :nth-child(2)')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('50%')
                })

            cy.get('tbody > :nth-child(3) > :nth-child(2)')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('50%')
                })

            cy.get('tbody > :nth-child(1) > :nth-child(3)')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('50')
                })

            cy.get('.pt-4 > .btn').click()
        })
    })

    context('Manajemen Kunjungan Dealer', () => {
        it('data not found', () => {
            // Main Page
            cy.get('.kt-menu-id_90 > .kt-menu__toggle').click()
            cy.get('.kt-menu-id_95 > .kt-menu__link').click()
            cy.get('.kt-portlet__head-title')
            cy.get('.card-body').should('be.visible')
            cy.get('#table-data-table_wrapper').should('be.visible')

            cy.get('#select2-branch-container').click()
            cy.get('.select2-search__field').clear().type('TUTUP')
            cy.get('#select2-branch-results > li:first').click()
            cy.get('#filter').click()
            cy.get('.dt-empty').should('be.visible')
        })

        it('Create and validate', () => {
            cy.get('.kt-menu-id_90 > .kt-menu__toggle').click()
            cy.get('.kt-menu-id_95 > .kt-menu__link').click()

            // Form Kunjungan Dealer
            cy.get('.kt-portlet__head > :nth-child(2) > .btn').click()
            cy.get('.kt-portlet__head-title')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('Form Penugasan Kunjungan Dealer')
                })

            cy.get('#select2-dealer_name-container').click()
            cy.get('.select2-search__field').clear().type('3 DARA MOTOR')
            cy.wait(3000)
            cy.get('#select2-dealer_name-results li:first').click()

            cy.get('#pic-mssg').should('be.visible')
            cy.get('#task_date-mssg').should('be.visible')
            cy.get('#visit_count-mssg').should('be.visible')

            cy.get('#select2-pic-container').click()
            cy.get('.select2-search__field').clear().type('ADAM C SIHITE')
            cy.wait(3000)
            cy.get('#select2-pic-results li:first').click()

            cy.get('#task_date').click()
            cy.get('.applyBtn').click()

            cy.get('#visit_count').clear().type(10)

            cy.get('#desc').clear().type('automation-test')

            cy.go('back')

            // Main page
            cy.get('.kt-portlet__head-title')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('Kunjungan Dealer')
                })
            cy.get('.card-body').should('be.visible')
            cy.get('#table-data-table_wrapper').should('be.visible')

            // cy.get('#select2-dealer_name-container').click()
            // cy.get('.select2-search__field').clear().type('3 DARA MOTOR')
            // cy.wait(3000)
            // cy.get('#select2-dealer_name-results li').eq(1).click()

            // cy.get('#select2-nama_pic-container').click()
            // cy.get('.select2-search__field').clear().type('ADAM C SIHITE')
            // cy.wait(3000)
            // cy.get('#select2-nama_pic-results li:first').eq(1).click()

            // cy.get('#filter').click()

            // cy.get('tbody > :nth-child(1) > :nth-child(2)')
            //     .invoke('text')
            //     .should((data) => {
            //         expect(data.trim()).to.eq('3 DARA MOTOR')
            //     })

            // cy.get('tbody > :nth-child(1) > :nth-child(4)')
            //     .invoke('text')
            //     .should((data) => {
            //         expect(data.trim()).to.eq('ADAM C SIHITE')
            //     })

            // cy.get(':nth-child(1) > .btn-option > .justify-content-start > .btn').click()

            cy.get('#period').click()

            function checkBulan() {
                cy.get('.left > .calendar-table > .table-condensed > thead > :nth-child(1) > .month')
                    .invoke('text')
                    .then((value) => {
                        if (value === 'Feb 2025') {
                            cy.get('.left > .calendar-table > .table-condensed > tbody > :nth-child(1) > [data-title="r0c6"]').click()
                            cy.get('.left > .calendar-table > .table-condensed > tbody > :nth-child(5) > [data-title="r4c5"]').click()
                            cy.get('.applyBtn').click()
                        } else {
                            cy.get('.prev').click()

                            checkBulan();
                        }
                    })
            }

            checkBulan();

            cy.get('#filter').click()
            cy.get(':nth-child(1) > .btn-option > .justify-content-start > .btn').click()

            // Detail Page
            cy.get('#data-dealer > .kt-portlet__head > .kt-portlet__head-label > .kt-portlet__head-title')
                .invoke('text')
                .should((data) => {
                    expect(data.trim()).to.eq('Data Dealer')
                })

            cy.get('#data-dealer > .kt-portlet__body > :nth-child(1)').should('be.visible')
            cy.get('#data-dealer > .kt-portlet__body > :nth-child(1) > :nth-child(2) > .row > :nth-child(2) > .col-11').should('be.visible')
            cy.get('#data-dealer > .kt-portlet__body > :nth-child(1) > :nth-child(3) > .row > :nth-child(2) > .col-11').should('be.visible')

            cy.get(':nth-child(5) > .row > :nth-child(2) > .col-11').should('be.visible')
            cy.get(':nth-child(6) > .row > :nth-child(2) > .col-11').should('be.visible')
            cy.get(':nth-child(5) > .row > :nth-child(4) > .col-11').should('be.visible')
        })
    })

    afterEach(() => {
        cy.get('.kt-header__topbar-wrapper > .kt-hidden-').click()
        cy.get('.kt-notification__custom > .btn').click()
        cy.get('.swal2-confirm').click()

        cy.get('.kt-login__title').should('have.text', 'LOGIN')
    })
})
