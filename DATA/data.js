
const travel_agencies = [
    {
        id: 10,
        agencyName: 'Khatoco Tourist',
        phone: '0910123456',
        mail: 'tour@khatoco.com'
    },
    {
        id: 1,
        agencyName: 'Saigontourist',
        phone: '0901234567',
        mail: 'contact@saigontourist.vn'
    },
    {
        id: 2,
        agencyName: 'Vietravel',
        phone: '0902345678',
        mail: 'info@vietravel.com'
    },
    {
        id: 3,
        agencyName: 'Fiditour',
        phone: '0903456789',
        mail: 'support@fiditour.vn'
    },
    {
        id: 4,
        agencyName: 'BenThanh Tourist',
        phone: '0904567890',
        mail: 'contact@benthanhtourist.com'
    },
    {
        id: 5,
        agencyName: 'Hanoitourist',
        phone: '0905678901',
        mail: 'info@hanoitourist.vn'
    },
    {
        id: 6,
        agencyName: 'TST Tourist',
        phone: '0906789012',
        mail: 'booking@tsttourist.com'
    },
    {
        id: 7,
        agencyName: 'Redtours',
        phone: '0907890123',
        mail: 'contact@redtours.vn'
    },
    {
        id: 8,
        agencyName: 'Du Lich Viet',
        phone: '0908901234',
        mail: 'info@dulichviet.com.vn'
    },
    {
        id: 9,
        agencyName: 'Vietnam Booking',
        phone: '0909012345',
        mail: 'support@vietnambooking.com'
    },
    {
        id: 11,
        agencyName: 'PYS Travel',
        phone: '0911122233',
        mail: 'contact@pystravel.vn'
    },
    {
        id: 12,
        agencyName: 'SST Travel',
        phone: '0912233445',
        mail: 'info@ssttravel.vn'
    },
    {
        id: 13,
        agencyName: 'Golden Smile Travel',
        phone: '0913344556',
        mail: 'support@goldensmiletravel.com'
    },
    {
        id: 14,
        agencyName: 'Hai Au Tourist',
        phone: '0914455667',
        mail: 'booking@haiautourist.vn'
    },
    {
        id: 15,
        agencyName: 'Asia Sun Travel',
        phone: '0915566778',
        mail: 'contact@asiasuntravel.vn'
    }
];

const tour_guides = [
    { guideId: 1, guideName: 'Nguyen Van An' },
    { guideId: 2, guideName: 'Tran Thi Bich' },
    { guideId: 3, guideName: 'Le Hoang Nam' },
    { guideId: 4, guideName: 'Pham Minh Tuan' },
    { guideId: 5, guideName: 'Vo Thanh Trung' },
    { guideId: 6, guideName: 'Dang Thu Ha' },
    { guideId: 7, guideName: 'Nguyen Quoc Bao' },
    { guideId: 8, guideName: 'Tran Ngoc Anh' },
    { guideId: 9, guideName: 'Le Thanh Tung' },
    { guideId: 10, guideName: 'Pham Gia Han' },
    { guideId: 11, guideName: 'Do Minh Chau' },
    { guideId: 12, guideName: 'Huynh Bao Ngoc' },
    { guideId: 13, guideName: 'Bui Tuan Kiet' },
    { guideId: 14, guideName: 'Ngo Thanh Huyen' },
    { guideId: 15, guideName: 'Nguyen Hai Dang' }
];

const tours = [
    {
        id: 1,
        tourName: 'Da Nang Discovery',
        agencyId: 1,
        guideId: 1,
        startDate: '2026-06-01',
        endDate: '2026-06-05',
        price: 185,
        image: '../IMAGES/danang.jpg'
    },
    {
        id: 2,
        tourName: 'Ha Long Bay Tour',
        agencyId: 2,
        guideId: 2,
        startDate: '2026-06-03',
        endDate: '2026-06-07',
        price: 305,
        image: '../IMAGES/halongbay.jpeg'
    },
    {
        id: 3,
        tourName: 'Hue Ancient Capital',
        agencyId: 3,
        guideId: 3,
        startDate: '2026-06-05',
        endDate: '2026-06-09',
        price: 169,
        image: '../IMAGES/hue.jpeg'
    },
    {
        id: 4,
        tourName: 'Sapa Mountain Trip',
        agencyId: 4,
        guideId: 4,
        startDate: '2026-06-10',
        endDate: '2026-06-15',
        price: 320,
        image: '../IMAGES/sapa.jpeg'
    },
    {
        id: 5,
        tourName: 'Nha Trang Beach',
        agencyId: 5,
        guideId: 5,
        startDate: '2026-06-12',
        endDate: '2026-06-16',
        price: 272,
        image: '../IMAGES/nhatrang.jpeg'
    },
    {
        id: 6,
        tourName: 'Phu Quoc Island',
        agencyId: 6,
        guideId: 6,
        startDate: '2026-06-15',
        endDate: '2026-06-20',
        price: 340,
        image: '../IMAGES/phuquoc.jpeg'
    },
    {
        id: 7,
        tourName: 'Mekong Delta',
        agencyId: 7,
        guideId: 7,
        startDate: '2026-06-18',
        endDate: '2026-06-21',
        price: 179,
        image: '../IMAGES/mekong.jpeg'
    },
    {
        id: 8,
        tourName: 'Hoi An Ancient Town',
        agencyId: 8,
        guideId: 8,
        startDate: '2026-06-20',
        endDate: '2026-06-24',
        price: 215,
        image: '../IMAGES/hoian.jpeg'
    },
    {
        id: 9,
        tourName: 'Dalat Flower City',
        agencyId: 9,
        guideId: 9,
        startDate: '2026-06-22',
        endDate: '2026-06-26',
        price: 205,
        image: '../IMAGES/dalat.jpeg'
    },
    {
        id: 10,
        tourName: 'Can Tho Floating Market',
        agencyId: 10,
        guideId: 10,
        startDate: '2026-06-25',
        endDate: '2026-06-28',
        price: 129,
        image: '../IMAGES/cantho.jpeg'
    },
    {
        id: 11,
        tourName: 'Con Dao Adventure',
        agencyId: 11,
        guideId: 11,
        startDate: '2026-06-27',
        endDate: '2026-07-01',
        price: 343,
        image:  '../IMAGES/condao.jpeg'
    },
    {
        id: 12,
        tourName: 'Mui Ne Sand Dunes',
        agencyId: 12,
        guideId: 12,
        startDate: '2026-07-01',
        endDate: '2026-07-04',
        price: 185,
        image: '../IMAGES/muine.jpeg'
    },
    {
        id: 13,
        tourName: 'Ba Na Hills',
        agencyId: 13,
        guideId: 13,
        startDate: '2026-07-03',
        endDate: '2026-07-06',
        price: 255,
        image: '../IMAGES/banahill.jpeg'
    },
    {
        id: 14,
        tourName: 'Cat Ba Island',
        agencyId: 14,
        guideId: 14,
        startDate: '2026-07-05',
        endDate: '2026-07-09',
        price: 265,
        image: '../IMAGES/catba.jpeg'
    },
    {
        id: 15,
        tourName: 'Vietnam Heritage Tour',
        agencyId: 15,
        guideId: 15,
        startDate: '2026-07-10',
        endDate: '2026-07-18',
        price: 400,
        image: '../IMAGES/heritage.jpeg'
    }
];

const places= [
    { id: 1, placeName: 'Da Nang' },
    { id: 2, placeName: 'Ha Long Bay' },
    { id: 3, placeName: 'Hue' },
    { id: 4, placeName: 'Sapa' },
    { id: 5, placeName: 'Nha Trang' },
    { id: 6, placeName: 'Phu Quoc' },
    { id: 7, placeName: 'Mekong Delta' },
    { id: 8, placeName: 'Hoi An' },
    { id: 9, placeName: 'Dalat' },
    { id: 10, placeName: 'Can Tho' },
    { id: 11, placeName: 'Con Dao' },
    { id: 12, placeName: 'Mui Ne' },
    { id: 13, placeName: 'Ba Na Hills' },
    { id: 14, placeName: 'Cat Ba' },
    { id: 15, placeName: 'Hanoi' }
];

const tour_places = [
  { tourId: 1, placeId: 1, visitOrder: 1 },
  { tourId: 2, placeId: 2, visitOrder: 1 },
  { tourId: 3, placeId: 3, visitOrder: 1 },
  { tourId: 4, placeId: 4, visitOrder: 1 },
  { tourId: 5, placeId: 5, visitOrder: 1 },
  { tourId: 6, placeId: 6, visitOrder: 1 },
  { tourId: 7, placeId: 7, visitOrder: 1 },
  { tourId: 8, placeId: 8, visitOrder: 1 },
  { tourId: 9, placeId: 9, visitOrder: 1 },
  { tourId: 10, placeId: 10, visitOrder: 1 },
  { tourId: 11, placeId: 11, visitOrder: 1 },
  { tourId: 12, placeId: 12, visitOrder: 1 },
  { tourId: 13, placeId: 13, visitOrder: 1 },
  { tourId: 14, placeId: 14, visitOrder: 1 },
  { tourId: 15, placeId: 15, visitOrder: 1 }
];

const customers = [
    { id: 1, customerName: 'John Smith', phone: '0911111111', country: 'USA' },
    { id: 2, customerName: 'Anna Lee', phone: '0922222222', country: 'UK' },
    { id: 3, customerName: 'Nguyen Van A', phone: '0933333333', country: 'Vietnam' },
    { id: 4, customerName: 'Tran Thi B', phone: '0944444444', country: 'Vietnam' },
    { id: 5, customerName: 'David Brown', phone: '0955555555', country: 'Canada' },
    { id: 6, customerName: 'Maria Garcia', phone: '0966666666', country: 'Spain' },
    { id: 7, customerName: 'Kim Soo', phone: '0977777777', country: 'Korea' },
    { id: 8, customerName: 'Tanaka Ken', phone: '0988888888', country: 'Japan' },
    { id: 9, customerName: 'Ali Ahmed', phone: '0999999999', country: 'UAE' },
    { id: 10, customerName: 'Pierre Louis', phone: '0900000001', country: 'France' },
    { id: 11, customerName: 'Sophia Wilson', phone: '0900000002', country: 'Australia' },
    { id: 12, customerName: 'Liam Martin', phone: '0900000003', country: 'Ireland' },
    { id: 13, customerName: 'Olivia Davis', phone: '0900000004', country: 'USA' },
    { id: 14, customerName: 'Noah Miller', phone: '0900000005', country: 'Germany' },
    { id: 15, customerName: 'Emma Taylor', phone: '0900000006', country: 'Singapore' }
];

const tickets = [
    {
        id: 1,
        customerId: 1,
        tourId: 1,
        bookingDate: '2026-05-01',
        totalPrice: 5000000
    },
    {
        id: 2,
        customerId: 2,
        tourId: 2,
        bookingDate: '2026-05-02',
        totalPrice: 7000000
    },
    {
        id: 3,
        customerId: 3,
        tourId: 3,
        bookingDate: '2026-05-03',
        totalPrice: 4500000
    },
    {
        id: 4,
        customerId: 4,
        tourId: 4,
        bookingDate: '2026-05-04',
        totalPrice: 8000000
    },
    {
        id: 5,
        customerId: 5,
        tourId: 5,
        bookingDate: '2026-05-05',
        totalPrice: 6000000
    },
    {
        id: 6,
        customerId: 6,
        tourId: 6,
        bookingDate: '2026-05-06',
        totalPrice: 9500000
    },
    {
        id: 7,
        customerId: 7,
        tourId: 7,
        bookingDate: '2026-05-07',
        totalPrice: 4000000
    },
    {
        id: 8,
        customerId: 8,
        tourId: 8,
        bookingDate: '2026-05-08',
        totalPrice: 5500000
    },
    {
        id: 9,
        customerId: 9,
        tourId: 9,
        bookingDate: '2026-05-09',
        totalPrice: 5200000
    },
    {
        id: 10,
        customerId: 10,
        tourId: 10,
        bookingDate: '2026-05-10',
        totalPrice: 3800000
    },
    {
        id: 11,
        customerId: 11,
        tourId: 11,
        bookingDate: '2026-05-11',
        totalPrice: 10000000
    },
    {
        id: 12,
        customerId: 12,
        tourId: 12,
        bookingDate: '2026-05-12',
        totalPrice: 4800000
    },
    {
        id: 13,
        customerId: 13,
        tourId: 13,
        bookingDate: '2026-05-13',
        totalPrice: 6200000
    },
    {
        id: 14,
        customerId: 14,
        tourId: 14,
        bookingDate: '2026-05-14',
        totalPrice: 7300000
    },
    {
        id: 15,
        customerId: 15,
        tourId: 15,
        bookingDate: '2026-05-15',
        totalPrice: 15000000
    }
];

const payments = [
    {
        id: 1,
        ticketId: 1,
        paymentDate: '2026-05-01',
        method: 'Credit Card',
        status: 'Paid'
    },
    {
        id: 2,
        ticketId: 2,
        paymentDate: '2026-05-02',
        method: 'Bank Transfer',
        status: 'Paid'
    },
    {
        id: 3,
        ticketId: 3,
        paymentDate: '2026-05-03',
        method: 'Cash',
        status: 'Pending'
    },
    {
        id: 4,
        ticketId: 4,
        paymentDate: '2026-05-04',
        method: 'Momo',
        status: 'Paid'
    },
    {
        id: 5,
        ticketId: 5,
        paymentDate: '2026-05-05',
        method: 'ZaloPay',
        status: 'Paid'
    },
    {
        id: 6,
        ticketId: 6,
        paymentDate: '2026-05-06',
        method: 'Credit Card',
        status: 'Pending'
    },
    {
        id: 7,
        ticketId: 7,
        paymentDate: '2026-05-07',
        method: 'Cash',
        status: 'Paid'
    },
    {
        id: 8,
        ticketId: 8,
        paymentDate: '2026-05-08',
        method: 'Bank Transfer',
        status: 'Paid'
    },
    {
        id: 9,
        ticketId: 9,
        paymentDate: '2026-05-09',
        method: 'Momo',
        status: 'Pending'
    },
    {
        id: 10,
        ticketId: 10,
        paymentDate: '2026-05-10',
        method: 'Credit Card',
        status: 'Paid'
    },
    {
        id: 11,
        ticketId: 11,
        paymentDate: '2026-05-11',
        method: 'ZaloPay',
        status: 'Paid'
    },
    {
        id: 12,
        ticketId: 12,
        paymentDate: '2026-05-12',
        method: 'Cash',
        status: 'Pending'
    },
    {
        id: 13,
        ticketId: 13,
        paymentDate: '2026-05-13',
        method: 'Bank Transfer',
        status: 'Paid'
    },
    {
        id: 14,
        ticketId: 14,
        paymentDate: '2026-05-14',
        method: 'Momo',
        status: 'Paid'
    },
    {
        id: 15,
        ticketId: 15,
        paymentDate: '2026-05-15',
        method: 'Credit Card',
        status: 'Paid'
    }
];

const rates = [
    {
        id: 1,
        ticketId: 1,
        comment: 'Amazing tour and friendly guide',
        date: '2026-06-06'
    },
    {
        id: 2,
        ticketId: 2,
        comment: 'Beautiful places and good service',
        date: '2026-06-08'
    },
    {
        id: 3,
        ticketId: 3,
        comment: 'Very enjoyable experience',
        date: '2026-06-10'
    },
    {
        id: 4,
        ticketId: 4,
        comment: 'The weather was perfect',
        date: '2026-06-16'
    },
    {
        id: 5,
        ticketId: 5,
        comment: 'Excellent food and hotel',
        date: '2026-06-17'
    },
    {
        id: 6,
        ticketId: 6,
        comment: 'Highly recommended',
        date: '2026-06-21'
    },
    {
        id: 7,
        ticketId: 7,
        comment: 'Great value for money',
        date: '2026-06-22'
    },
    {
        id: 8,
        ticketId: 8,
        comment: 'Wonderful cultural experience',
        date: '2026-06-25'
    },
    {
        id: 9,
        ticketId: 9,
        comment: 'Very professional guide',
        date: '2026-06-27'
    },
    {
        id: 10,
        ticketId: 10,
        comment: 'Would love to come back again',
        date: '2026-06-29'
    },
    {
        id: 11,
        ticketId: 11,
        comment: 'Fantastic island adventure',
        date: '2026-07-02'
    },
    {
        id: 12,
        ticketId: 12,
        comment: 'Everything was organized well',
        date: '2026-07-05'
    },
    {
        id: 13,
        ticketId: 13,
        comment: 'A memorable family trip',
        date: '2026-07-07'
    },
    {
        id: 14,
        ticketId: 14,
        comment: 'Clean hotel and friendly staff',
        date: '2026-07-10'
    },
    {
        id: 15,
        ticketId: 15,
        comment: 'Best Vietnam tour ever',
        date: '2026-07-20'
    }
];
const DB = {
    travel_agencies,
    tour_guides,
    tours,
    tour_places,    
    places,
    customers,
    tickets,
    payments,
    rates
};