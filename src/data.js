export const schools = [
  { id: 'unilag', name: 'University of Lagos', location: 'Akoka, Lagos' },
  { id: 'yabatech', name: 'Yaba College of Technology', location: 'Yaba, Lagos' },
  { id: 'lasu', name: 'Lagos State University', location: 'Ojo, Lagos' },
  { id: 'ui', name: 'University of Ibadan', location: 'Ibadan' },
]

const images = [
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85',
]

export const properties = [
  { id: 'p1', title: 'The Atrium at Yaba', type: 'Self Contain', area: 'Yaba', address: '18 Herbert Macaulay Way', rent: 650000, charges: 85000, distance: { unilag: 4.2, yabatech: 2.8, lasu: 18.4 }, image: images[0], amenities: ['Water Supply', 'Security', 'Prepaid Meter', 'Wardrobe'], provider: 'Northstar Homes', rooms: 1, available: true, verified: true, description: 'A bright, thoughtfully finished self-contained apartment in a secure compound with reliable water and easy access to campus routes.' },
  { id: 'p2', title: 'Cedar House Studios', type: 'Self Contain', area: 'Akoka', address: '7 University Road', rent: 720000, charges: 100000, distance: { unilag: 1.8, yabatech: 4.1, lasu: 20.2 }, image: images[1], amenities: ['Security', 'Kitchen', 'Parking', 'Tiled Floor'], provider: 'Cedar Living', rooms: 1, available: true, verified: true, description: 'Quiet studio apartments minutes from the University of Lagos gate, with clean finishes and a resident caretaker.' },
  { id: 'p3', title: 'Palmview Court', type: 'Mini Flat', area: 'Bariga', address: '22 Pedro Street', rent: 900000, charges: 120000, distance: { unilag: 5.6, yabatech: 5.2, lasu: 21.5 }, image: images[2], amenities: ['Water Supply', 'Parking', 'Security', 'Internet'], provider: 'Palmview Properties', rooms: 2, available: true, verified: true, description: 'A spacious mini flat for students who want room to settle in, with a calm courtyard and practical amenities.' },
  { id: 'p4', title: 'Olive Court Residence', type: 'Shared Apartment', area: 'Surulere', address: '4 Adeniran Ogunsanya', rent: 480000, charges: 65000, distance: { unilag: 8.5, yabatech: 6.9, lasu: 16.2 }, image: images[3], amenities: ['Electricity', 'Security', 'Kitchen', 'Internet'], provider: 'Olive Court Ltd', rooms: 3, available: true, verified: true, description: 'A friendly shared residence with furnished common areas, a dependable power plan and straightforward pricing.' },
  { id: 'p5', title: 'Harbour Point Annex', type: 'Self Contain', area: 'Ojuelegba', address: '11 Western Avenue', rent: 580000, charges: 70000, distance: { unilag: 7.2, yabatech: 5.8, lasu: 17.1 }, image: images[0], amenities: ['Water Supply', 'Security', 'Parking'], provider: 'Harbour Point', rooms: 1, available: false, verified: true, description: 'Well maintained apartments in a connected neighbourhood. This listing is currently unavailable for new inspections.' },
  { id: 'p6', title: 'Ikeja Green Apartments', type: 'Mini Flat', area: 'Ikeja', address: '2 Allen Lane', rent: 1100000, charges: 150000, distance: { unilag: 14.2, yabatech: 12.4, lasu: 23.1 }, image: images[1], amenities: ['Security', 'Parking', 'Prepaid Meter', 'Wardrobe'], provider: 'Greenline Estates', rooms: 2, available: true, verified: true, description: 'Modern two-room apartments with quality finishes and easy access to public transport and city amenities.' },
]

export const formatNaira = (value) => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(value)
