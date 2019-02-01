

class View

	def welcome
		puts "Hello, my friend"
	end

end


class Model

	def get_name
 	    puts ("Please Enter your name:")
 	    @name = gets.chomp
 	    puts "#{@name}? That's kind of a dumb name, but whatever..."
 	    sleep 1.5
 	    puts "I'll make a nickname out of your name for you, #{@name}"
	end

	def change_name
		@adj = ["aggressive",
                "aloof",
                "arrogant",
                "belligerent",
                "big-headed",
                "bitchy",
                "boastful",
                "bone-idle",
                "boring",
                "bossy",
                "callous",
                "cantankerous",
                "careless",
                "changeable",
                "clinging",
                "compulsive",
                "conservative",
                "cowardly",
                "cruel",
                "cunning",
                "cynical",
                "deceitful",
                "detached",
                "dishonest",
                "dogmatic",
                "domineering",
                "finicky",
                "flirtatious",
                "foolish",
                "foolhardy",
                "fussy",
                "greedy",
                "grumpy",
                "gullible",
                "harsh",
                "impatient",
                "impolite",
                "impulsive",
                "inconsiderate",
                "inconsistent",
                "indecisive",
                "indiscreet",
                "inflexible",
                "interfering",
                "intolerant",
                "irresponsible",
                "jealous",
                "lazy",
                "Machiavellian",
                "materialistic",
                "mean",
                "miserly",
                "moody",
                "narrow-minded",
                "nasty",
                "naughty",
                "nervous",
                "obsessive",
                "obstinate",
                "overcritical",
                "overemotional",
                "parsimonious",
                "patronizing",
                "perverse",
                "pessimistic",
                "pompous",
                "possessive",
                "pusillanimous",
                "quarrelsome",
                "quick-tempered",
                "resentful",
                "rude",
                "ruthless",
                "sarcastic",
                "secretive",
                "selfish",
                "self-centred",
                "self-indulgent",
                "silly",
                "sneaky",
                "stingy",
                "stubborn",
                "stupid",
                "superficial",
                "tactless",
                "timid",
                "touchy",
                "thoughtless",
                "truculent",
                "unkind",
                "unpredictable",
                "unreliable",
                "untidy",
                "untrustworthy",
                "vague",
                "vain",
                "vengeful",
                "vulgar",
                "weak-willed"].sample.capitalize

    	puts "Your new nickname is:"
    	sleep 1.5
    	puts "#{@adj}" + " " + "#{@name}"
	end
end


class Controller

	def initialize
		@v = View.new
		@m = Model.new
	end

	def start
		@v.welcome
		@m.get_name
		@m.change_name
	end
end

c = Controller.new

c.start
