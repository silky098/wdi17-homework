
def subway
{
    "n" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "l" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "six" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
    }
end

def single_line_trip(line, start_station, end_station)


  first = subway[line].index start_station.to_s
  last = subway[line].index end_station.to_s

  if first < last
    answer = subway[line][ first..last ]
  else
    answer = subway[line][ last..first ].reverse
  end


end



  print "Please enter line you are getting on at (n, l or six): "
  line_on = gets.chomp

  print "Please enter the stop name you are getting on at: "
  stop_on = gets.chomp

  print "Please enter line you are getting off at (n, l or six): "
  line_off = gets.chomp

  print "Please enter the stop name you are getting of at: "
  stop_off = gets.chomp



  if line_on == line_off

    answer = single_line_trip( line_on, stop_on, stop_off )

    print "You will stop at: "
    answer.each { |stop| puts stop }

  elsif line_on != line_off

    answer = single_line_trip( line_on, stop_on, "Union Square" )
    answer_two = single_line_trip( line_off, "Union Square", stop_off )

    puts "You will stop at: "
    answer.each do |stop|
      puts stop
    end

    puts "Then you will stop at: "
    answer_two.each do |stop|
      puts stop
    end

    # first = subway[line_on].index stop_on.to_s
    # middle = subway[line_on].index "Union Square"
    # second_middle = subway[line_off].index "Union Square"
    # last = subway[line_off].index stop_off.to_s
    #
    # if first < middle
    #   answer_one = subway[line_on].values_at( first..middle )
    # else
    #   answer_one = subway[line_on].values_at( middle..first ).reverse
    # end
    #
    # print "You will take the following stops at #{line_on}: #{answer_one}"
    #
    # if second_middle < last
    #   answer_two = subway[line_off].values_at( second_middle..last )
    # else
    #   answer_two = subway[line_off].values_at( last..second.middle ).reverse
    # end
    #
    # puts "Then switch to line #{line_off} and take #{answer_two}."

  end
